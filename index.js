#!/usr/bin/env node

(async () => {
  try {
    const { intro, outro, text, confirm, isCancel, select, spinner } = require('@clack/prompts');
    const fs = require('fs-extra');
    const path = require('path');
    const { exec } = require('child_process');

    intro('Create My Starter');

    const projectName = await text({
      message: 'Project name:',
      initialValue: 'my-app',
      validate: (value) => {
        if (!value.trim()) {
          return 'Project name is required';
        }
      },
    });

    if (isCancel(projectName)) {
      outro('Operation cancelled');
      process.exit(1);
    }

    const boilerplateType = await select({
      message: 'Client-side or Server-side boilerplate?',
      options: [
        { value: 'client', label: 'Client-side' },
        { value: 'server', label: 'Server-side' },
      ],
    });

    if (isCancel(boilerplateType)) {
      outro('Operation cancelled');
      process.exit(1);
    }

    let template;
    if (boilerplateType === 'client') {
      template = await select({
        message: 'Select a client-side template',
        options: [
          { value: 'react-starter-ts', label: 'React Starter', hint: 'A basic React starter with TypeScript and Vite.' },
          { value: 'react-shadcn-starter-ts', label: 'React + Shadcn UI', hint: 'A React starter with TypeScript, Vite, and Shadcn UI.' },
          { value: 'react-solana-starter-ts', label: 'React + Solana', hint: 'A React starter with TypeScript, Vite, and Solana integration.' },
        ],
      });
    } else {
      template = await select({
        message: 'Select a server-side template',
        options: [
          { value: 'express-ts', label: 'Express', hint: 'A basic Express.js server with TypeScript.' },
          { value: 'express-auth-ts', label: 'Express + Auth', hint: 'An Express.js server with TypeScript and JWT authentication.' },
          { value: 'express-google-ts', label: 'Express + Google Auth', hint: 'An Express.js server with TypeScript and Google OAuth.' },
          { value: 'express-ts-bun', label: 'Express + Bun', hint: 'An Express.js server with TypeScript, configured for Bun.' },
        ],
      });
    }

    if (isCancel(template)) {
      outro('Operation cancelled');
      process.exit(1);
    }

    const targetDir = path.resolve(process.cwd(), projectName);

    if (await fs.pathExists(targetDir)) {
      const overwrite = await confirm({
        message: `Directory ${projectName} already exists. Overwrite?`,
        initialValue: false,
      });

      if (isCancel(overwrite) || !overwrite) {
        outro('Operation cancelled');
        process.exit(1);
      }

      await fs.remove(targetDir);
    }

    const templateDir = path.resolve(__dirname, template);
    if (!(await fs.pathExists(templateDir))) {
      throw new Error(`Template directory not found: ${template}`);
    }

    const s = spinner();
    s.start('Copying files...');
    await fs.copy(templateDir, targetDir);
    s.stop('Files copied.');

    s.start('Initializing git repository...');
    await new Promise((resolve, reject) => {
      exec('git init', { cwd: targetDir }, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
    s.stop('Git repository initialized.');

    outro(`Project created in ${targetDir}

Next steps:

  cd ${projectName}
  npm install
  npm run dev`);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
})();
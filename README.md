# jobs

**jobs** is a microfrontend Angular application built with [Angular CLI](https://github.com/angular/angular-cli) **v20.0.0**.  
It is designed to be consumed as a remote module in a larger host application using **Webpack Module Federation**.

---

## 🚀 Development Server

To start the local development server:

```bash
ng serve
```

Navigate to [http://localhost:4200/](http://localhost:4200/) in your browser.  
The app will auto-reload when you modify source files.

---

## 🛠️ Code Scaffolding

Generate new components, services, or other Angular constructs with:

```bash
ng generate component component-name
```

For a full list of schematics (components, directives, pipes, etc.):

```bash
ng generate --help
```

---

## 📦 Building

Run the following to build the project:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.  
By default, the build is optimized for production performance.

---

## 🧪 Running Unit Tests

Run unit tests with [Karma](https://karma-runner.github.io):

```bash
ng test
```

---

## 🌐 Running End-to-End Tests

For e2e tests, run:

```bash
ng e2e
```

> Note: Angular CLI does not ship with an e2e framework by default.  
> You may integrate **Cypress** or **Playwright** depending on your project needs.

---

## 🔗 Module Federation Setup

This project is configured as a **remote** microfrontend exposing modules for integration:

- **Remote name:** `jobs`  
- **Entry file:** `remoteEntry.js`  
- **Exposed modules:**  
  - `./Component` → `src/app/app.ts`

Update your **host** application’s `webpack.config.js` to consume these remotes.

---

## 📚 Additional Resources

- [Angular CLI Documentation](https://angular.dev/tools/cli)  
- [Angular Module Federation Guide](https://www.angulararchitects.io/en/guide/module-federation/)  

---

⚡ Ready to plug into your host app and scale!  

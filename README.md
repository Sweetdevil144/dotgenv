# dotgenv

Our DevTo Blog [Link](https://dev.to/devrx/dotgenv-revolutionize-your-nodejs-secret-management-a1m)

## Description

**dotgenv** is a comprehensive and versatile tool aimed at simplifying the management of environment variables and secrets. This robust utility streamlines the process of handling sensitive information like API keys and configuration parameters, ensuring a more secure and efficient development workflow. Designed with simplicity and functionality in mind, dotgenv is an ideal choice for developers looking to enhance their project's configuration management.

## Features

- **Environment Variable Management**: Easily set, update, and delete environment variables.
- **Seamless Integration**: Quick to set up with existing Node.js projects.
- **Secure Secrets Handling**: Offers a safer way to handle API keys and other confidential data.
- **Interactive CLI**: Intuitive command-line interface to manage configurations interactively.

## Installation

To install dotgenv, simply run the following command in your terminal:

```bash
npm install dotgenv
```

## Usage

Once installed, dotgenv can be easily utilized within your Node.js applications. Here's a quick guide on how to use it:

### Setting an Environment Variable

```javascript
const { setEnv } = require('dotgenv');

setEnv('API_KEY', 'your-api-key-here');
```

### Retrieving an Environment Variable

```javascript
const { getEnv } = require('dotgenv');

const apiKey = getEnv('API_KEY');
console.log(apiKey);
```

### Deleting an Environment Variable

```javascript
const { deleteEnv } = require('dotgenv');

deleteEnv('API_KEY');
```

## Contributing

Contributions are what make the open source community such a fantastic place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Author

**Abhinav Pandey** - _Initial Work_ - [AbhinavPandey](https://github.com/Sweetdevil144)

## Acknowledgements

- [chalk](https://www.npmjs.com/package/chalk)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [inquirer](https://www.npmjs.com/package/inquirer)
- [yargs](https://www.npmjs.com/package/yargs)

## Contact

Abhinav Pandey : [abhinavpandet1230@gmail.com](abhinavpandet1230@gmail.com)

Project Link: [https://github.com/Sweetdevil144/dotgenv](https://github.com/Sweetdevil144/dotgenv)

---

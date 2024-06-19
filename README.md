# Project Title

It is the Backend for the Windows Application Form.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

* [Nodejs](https://nodejs.org/en)
* [git](https://www.git-scm.com/downloads)

### Cloning Repository

```bash
git clone https://github.com/ishangarg39/formBackend.git
cd formBackend
```


### Installing Dependencies

**npm**
```bash
npm install
npm install nodemon
```
End with an example of getting some data out of the system or using it for a little demo

## Running the Server on Local Host

```bash
npm run dev
```
### Testing Server

Use ThunderClient Or Postman to test Backend Api

Checking Ping (Set to GET)

```
http://localhost:3000/ping
```

Checking Read (Set to GET)

```
http://localhost:3000/read?index=0
```

Checking Submit (Set to POST)

```
http://localhost:3000/submit
```
add body

```
{
"Name":"User",
"Email":"User@gmail.com",
"PhoneNumber":"0123456789",
"GitHubLink":"User.com",
"TimeSpent":"0"
}
```

## Running with UI

Run the server on local host simultaneouly with Windows Form Application to run the whole application.


## Authors

* [**Ishan Garg**](https://github.com/ishangarg39)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


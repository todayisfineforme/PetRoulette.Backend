# Foobar

Foobar is a Python library for dealing with word pluralization.

## Installation

Use the node package manager [npm](https://nodejs.org/en/) to install foobar.

```bash
npm install foobar
```

## Usage

```node.js
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)





Api key:IS1IvbHPCjhCTPVzwQMflCqwiGO82HyvrWGhGwtlcKkCbLJu5V.

Secret:GxmOtxnso3f7nYBb4TlgrcBruWNsMMEb2FTmwjDM.

route method:get/post.

curl -d "grant_type=client_credentials&client_id={CLIENT-ID}&client_secret={CLIENT-SECRET}" https://api.petfinder.com/v2/oauth2/token


Api access using Get: curl -H "Authorization: Bearer {YOUR_ACCESS_TOKEN}" GET https://api.petfinder.com/v2/{CATEGORY}/{ACTION}?{parameter_1}={value_1}&{parameter_2}={value_2}

GET https://api.petfinder.com/v2/animals

GET https://api.petfinder.com/v2/animals/{id}

GET https://api.petfinder.com/v2/types

GET https://api.petfinder.com/v2/types/{type}

GET https://api.petfinder.com/v2/types/{type}/breeds

GET https://api.petfinder.com/v2/organizations

GET https://api.petfinder.com/v2/organizations/{id}


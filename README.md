## MJML Api

Very simple API to expose [mjml](https://github.com/mjmlio/mjml) main fct: ``mjml2html`


## Usage

```python
import requests

MJML_TO_HTML_API_URL = "http://localhost:5000/mjml2html


mjml = {
    "tagName": 'mjml',
    "attributes": {},
    "children": [{
        "tagName": 'mj-body',
        "attributes": {},
        "children": [{
            "tagName": 'mj-section',
            "attributes": {},
            "children": [{
                "tagName": 'mj-column',
                "attributes": {},
                "children": [{
                    "tagName": 'mj-image',
                    "attributes": {
                        'width': '100px',
                        'src': '/assets/img/logo-small.png'
                    }
                },
                {
                    "tagName": 'mj-divider',
                    "attributes": {
                        'border-color' : '#F46E43'
                    }
                }, 
                {
                    "tagName": 'mj-text',
                    "attributes": {
                        'font-size': '20px',
                        'color': '#F45E43',
                        'font-family': 'Helvetica'
                    },
                    "content": 'Hello World'
                }]
            }]
        }]
    }]
}

r = requests.post(
    MJML_TO_HTML_API_URL,
    json={"mjml": mjml, "minify": True, "keepComments": False},
)

html = r.json()["html"]

```

## Run

```
# build the container
docker build -t mjml-api .

# Run it :)
docker run -p 5000:5000 mjml-api
```



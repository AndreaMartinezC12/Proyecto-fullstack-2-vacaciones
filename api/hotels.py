import json
import requests
from urllib.parse import parse_qs, urlparse

def handler(request):
    location = request.args.get("location")
    check_in = request.args.get("check_in")
    check_out = request.args.get("check_out")
    qty_people = request.args.get("people")

    params ={
        "engine": "google_hotels",
        "q": location + "+hotels",
        "check_in_date": check_in,
        "check_out_date": check_out,
        "adults": qty_people,
        "currency": "MXN",
        "hl": "en",
        "api_key": "9d7d027cff59c9d81a06238f00abeb0574471f5da88e2ad8b7b5021c7002d8af"
    }

    response = requests.get(
        "https://serpapi.com/search.json",
        params=params
    )

    return {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps(response.json())
    }
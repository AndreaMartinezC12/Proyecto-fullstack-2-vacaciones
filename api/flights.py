import json
import requests
from urllib.parse import parse_qs, urlparse
import vuelos

def handler(request):
    query = parse_qs(urlparse(request.path).query)

    origin = query.get("departure_id", [""])[0]
    destination = query.get("arrival_id", [""])[0]
    departure_date = query.get("outbound_date", [""])[0]
    return_date = query.get("return_date", [""])[0]

    params ={
        "engine": "google_flights",
        "departure_id": origin,
        "arrival_id": destination,
        "outbound_date": departure_date,
        "return_date": return_date,
        "currency": "MXN",
        "hl": "en",
        "api_key": "9d7d027cff59c9d81a06238f00abeb0574471f5da88e2ad8b7b5021c7002d8af"
    }

    resultados = vuelos.searchflights(params)

    return {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps(resultados)
    }
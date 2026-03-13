import json
import requests
from . import vuelos

def handler(request):
    
    origin = request.args.get("departure_id")
    destination = request.args.get("arrival_id")
    departure_date = request.args.get("outbound_date")
    return_date = request.args.get("return_date")

    params = {
        "engine": "google_flights",
        "departure_id": origin,
        "arrival_id": destination,
        "outbound_date": departure_date,
        "return_date": return_date,
        "currency": "MXN",
        "hl": "en",
        "api_key": "YOUR_API_KEY"
    }

    resultados = vuelos.searchflights(params)

    # dsfd
    return {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps(resultados)
    }
import sys
import os

# Allow Python to find the backend application
sys.path.insert(
    0,
    os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "backend"))
)

from app import app


def test_home_page():
    client = app.test_client()

    response = client.get("/")

    assert response.status_code == 200


def test_products_api():
    client = app.test_client()

    response = client.get("/api/products")

    assert response.status_code == 200

    data = response.get_json()

    assert isinstance(data, list)
    assert len(data) > 0

    for product in data:
        assert "id" in product
        assert "name" in product
        assert "price" in product
        assert "unit" in product
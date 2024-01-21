from .common import CarToIdSerializer
from users.serializers.common import GarageSerializer

class PopulatedCarToIdSerializer(CarToIdSerializer):
  owner = GarageSerializer()
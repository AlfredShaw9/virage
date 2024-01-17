from .common import CarSerializer
from users.serializers.common import GarageSerializer

class PopulatedCarSerializer(CarSerializer):
  owner = GarageSerializer()
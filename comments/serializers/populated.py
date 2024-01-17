from .common import CommentSerializer
from users.serializers.common import GarageSerializer

class PopulatedCommentSerializer(CommentSerializer):
  owner = GarageSerializer()
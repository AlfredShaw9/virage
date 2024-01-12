from django.db import models

class CarToId(models.Model):
  image = models.CharField()
  owner = models.ForeignKey(
    to='users.User',
    on_delete=models.CASCADE,
    related_name='cars_to_id',
    null=True
  )
  identified_comment = models.ForeignKey(
    to='comments.Comment',
    on_delete=models.CASCADE,
    related_name='car_to_id_commented_on',
    null=True,
    blank=True
  )

  def __str__(self):
    return f"{self.owner} car to ID"

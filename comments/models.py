from django.db import models

class Comment(models.Model):
  text = models.CharField(max_length=500)
  owner = models.ForeignKey(
    to='users.User',
    on_delete=models.CASCADE,
    related_name='comment',
    null=True
  )
  car_to_id = models.ForeignKey(
    to='carstoid.CarToId',
    on_delete=models.CASCADE,
    related_name='comment',
    null=True
  )

  def __str__(self):
    return f"Comment by {self.owner} on car {self.car_to_id}"
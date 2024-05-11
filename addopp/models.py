from django.db import models

# Create your models here.
class Addopp(models.Model):
    company_name=models.CharField(max_length=50)
    company_location=models.CharField(max_length=50)
    # job_role=models.TextField()
    job_description=models.TextField()
    eligibility=models.CharField(max_length=40)
    skills=models.TextField()
    min_stipend=models.PositiveIntegerField()
    max_stipend=models.PositiveIntegerField()
    date=models.DateField()
    time=models.TimeField(auto_now_add=True)
    venue=models.CharField(max_length=100,null=False)
    last_date=models.DateField()
from django.contrib import admin
from addopp.models import Addopp
# Register your models here.

class AddoppAdmin(admin.ModelAdmin):
    list_display=('company_name','job_description')
    
admin.site.register(Addopp,AddoppAdmin)
from django.shortcuts import render

# Create your views here.
from addopp.models import Addopp
from django.http import HttpResponse
# admin

def homePage(request):  
    companyData=Addopp.objects.all()
    # for a in companyData:
    #     data={
    #         'companyData':companyData
    #         # 'company_name':'company_name',
    #         # 'company_location':'company_location'
    #     }
    
        
    return  render(request,'admin.html',{'companyData':companyData})

# def admin(request):
#     return render(request,'admin.html')
def student(request):
    return render(request,'customer.html')
from django.shortcuts import render

# Create your views here.
from addopp.models import Addopp
from django.http import HttpResponse
# admin

def homePage(request):  
    companyData=Addopp.objects.all()
   
    
        
    return  render(request,'admin.html',{'companyData':companyData})


def student(request):
    # return render(request,'customer.html')
    companyData=Addopp.objects.all()
   
    
        
    return  render(request,'customer.html',{'companyData':companyData})
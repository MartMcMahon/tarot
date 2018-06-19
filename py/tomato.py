import os
import urllib.request
from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from bs4 import BeautifulSoup
from time import sleep

def getDriver():
	dcap = dict(DesiredCapabilities.PHANTOMJS)
	dcap["phantomjs.page.settings.userAgent"] = (
		"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/53 "
		"(KHTML, like Gecko) Chrome/15.0.87"
	)
	if os.name == 'nt':
		driver = webdriver.PhantomJS(executable_path=r'C:\\Program Files (x86)\\phantomjs-2.1.1-windows\\bin\\phantomjs.exe', desired_capabilities=dcap)
	else:
		driver = webdriver.PhantomJS(desired_capabilities=dcap)
	return driver

class tomato:

	def __init__(self, url=''):
		if url:
			self.changeUrl(url)

	def changeUrl(self, url):
		self.source = url
		self.page = urllib.request.urlopen(url)
		self.soup = BeautifulSoup(self.page, "html.parser")
		return self.soup

	def getLinks(self):
		self.links = self.soup.find_all('a', href=True) 
		return self.links

	def getTagsOfClass(self, class_name):
		return self.soup.find_all(class_=class_name)

	def getDivsOfClass(self, class_name):
		return self.soup.find_all('div', class_=class_name)
		
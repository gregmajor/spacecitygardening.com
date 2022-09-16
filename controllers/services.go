package controllers

type ServicesController struct {
	Common
}

func (this *ServicesController) Get() {
	this.setLayout("services/services")
	this.setContent()
}

func (this *ServicesController) setContent() {
}
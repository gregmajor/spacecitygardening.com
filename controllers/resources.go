package controllers

type ResourcesController struct {
	Common
}

func (this *ResourcesController) Get() {
	this.setLayout("resources/resources")
	this.setContent()
}

func (this *ResourcesController) setContent() {
}
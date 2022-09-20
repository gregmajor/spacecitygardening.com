package controllers

type ResourceIndexController struct {
	Common
}

func (this *ResourceIndexController) Get() {
	this.setLayout("resources/resource-index")
	this.setContent()
}

func (this *ResourceIndexController) setContent() {
}

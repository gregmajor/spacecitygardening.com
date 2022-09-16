package controllers

type ContactController struct {
	Common
}

func (this *ContactController) Get() {
	this.setLayout("contact/contact")
	this.setContent()
}

func (this *ContactController) setContent() {
}
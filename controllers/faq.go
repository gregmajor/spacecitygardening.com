package controllers

type FaqController struct {
	Common
}

func (this *FaqController) Get() {
	this.setLayout("faq/faq")
	this.setContent()
}

func (this *FaqController) setContent() {
}
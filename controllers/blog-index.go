package controllers

type BlogIndexController struct {
	Common
}

func (this *BlogIndexController) Get() {
	this.setLayout("blog/index")
	this.setContent()
}

func (this *BlogIndexController) setContent() {
}
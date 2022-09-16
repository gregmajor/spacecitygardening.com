package controllers

type BlogController struct {
	Common
}

func (this *BlogController) Get() {
	this.setLayout("blog/blog")
	this.setContent()
}

func (this *BlogController) setContent() {
}
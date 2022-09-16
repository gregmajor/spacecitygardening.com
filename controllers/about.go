package controllers

type AboutController struct {
	Common
}

func (this *AboutController) Get() {
	this.setLayout("about/about")
	this.setContent()
}

func (this *AboutController) setContent() {
}
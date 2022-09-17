package controllers

type BlogEntryReadController struct {
	Common
}

func (this *BlogEntryReadController) Get() {
	this.setLayout("blog/read")
	this.setContent()
}

func (this *BlogEntryReadController) setContent() {
}
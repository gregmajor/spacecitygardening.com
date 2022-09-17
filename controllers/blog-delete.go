package controllers

type BlogEntryDeleteController struct {
	Common
}

func (this *BlogEntryDeleteController) Get() {
	this.setLayout("blog/index")
	this.setContent()
}

func (this *BlogEntryDeleteController) setContent() {
}
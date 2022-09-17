package controllers

type BlogEntryUpdateController struct {
	Common
}

func (this *BlogEntryUpdateController) Get() {
	this.setLayout("blog/index")
	this.setContent()
}

func (this *BlogEntryUpdateController) setContent() {
}
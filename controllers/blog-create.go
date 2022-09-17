package controllers

type BlogEntryCreateController struct {
	Common
}

func (this *BlogEntryCreateController) Get() {
	this.setLayout("blog/index")
	this.setContent()
}

func (this *BlogEntryCreateController) setContent() {
}

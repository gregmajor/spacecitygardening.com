package controllers

type TeamController struct {
	Common
}

func (this *TeamController) Get() {
	this.setLayout("team/team")
	this.setContent()
}

func (this *TeamController) setContent() {
}
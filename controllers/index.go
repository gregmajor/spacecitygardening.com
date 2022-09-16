package controllers

type IndexController struct {
	Common
}

func (this *IndexController) Get() {
	this.setLayout("index")
	this.setContent()
}

func (this *IndexController) setContent() {
	this.Data["Website"] = "beego.me"
	this.Data["Email"] = "astaxie@gmail.com"
}
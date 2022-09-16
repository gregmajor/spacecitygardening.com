package controllers

import (
	beego "github.com/beego/beego/v2/server/web"
)

type MainController struct {
	beego.Controller
}

func (this *MainController) configureContent(view string) {
	this.Layout = "layout.tpl"

	this.LayoutSections = make(map[string]string)

	this.LayoutSections["Header"] = "header.tpl"
	this.LayoutSections["SideToggle"] = "side-toggle.tpl"
	this.LayoutSections["Footer"] = "footer.tpl"
	this.LayoutSections["Preloader"] = "preloader.tpl"

	this.TplName = view + ".tpl"
}

func (this *MainController) Get() {
	this.Data["Website"] = "beego.me"
	this.Data["Email"] = "astaxie@gmail.com"

	this.configureContent("index")
}
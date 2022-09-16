package controllers

import (
	beego "github.com/beego/beego/v2/server/web"
)

type Common struct {
	beego.Controller
}

func (this *Common) setLayout(view string) {
	this.Layout = "layout.tpl"

	this.LayoutSections = make(map[string]string)

	this.LayoutSections["Header"] = "header.tpl"
	this.LayoutSections["SideToggle"] = "side-toggle.tpl"
	this.LayoutSections["Footer"] = "footer.tpl"
	this.LayoutSections["Preloader"] = "preloader.tpl"

	this.TplName = view + ".tpl"
}
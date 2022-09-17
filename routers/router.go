package routers

import (
    beego "github.com/beego/beego/v2/server/web"
    "spacecitygardening.com/controllers"
)

func init() {
	beego.Router("/", &controllers.IndexController{})
	beego.Router("/index", &controllers.IndexController{})

	beego.Router("/about", &controllers.AboutController{})

	beego.Router("/blog", &controllers.BlogIndexController{})
	beego.Router("/blog/entry", &controllers.BlogEntryReadController{})

	beego.Router("/contact", &controllers.ContactController{})

	beego.Router("/faq", &controllers.FaqController{})

	beego.Router("/portfolio", &controllers.PortfolioController{})

	beego.Router("/resources", &controllers.ResourcesController{})

	beego.Router("/services", &controllers.ServicesController{})

	beego.Router("/team", &controllers.TeamController{})
}

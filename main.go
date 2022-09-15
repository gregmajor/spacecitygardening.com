package main

import (
	_ "spacecitygardening.com/routers"
	beego "github.com/beego/beego/v2/server/web"
)

func main() {
	beego.SetStaticPath("/assets", "assets")
	beego.Run()
}


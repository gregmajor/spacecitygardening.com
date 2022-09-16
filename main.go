package main

import (
	_ "spacecitygardening.com/routers"
	beego "github.com/beego/beego/v2/server/web"
	"strconv"
	"os"
)

func main() {
	port, err := strconv.Atoi(os.Getenv("PORT"))
	if err == nil {
		beego.BConfig.Listen.HTTPPort = port
	} 

	beego.SetStaticPath("/assets", "assets")

	beego.Run()
}


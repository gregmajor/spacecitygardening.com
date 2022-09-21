package controllers

import (
	"github.com/revel/revel"
)

type Common struct {
	*revel.Controller
}

func (c *Common) GetSlogan() string {
	return "Information and resources for gardeners in the greater Houston area."
}

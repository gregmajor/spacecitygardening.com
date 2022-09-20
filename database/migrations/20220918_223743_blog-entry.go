package main

import (
	"github.com/beego/beego/v2/client/orm/migration"
)

// DO NOT MODIFY
type BlogEntry_20220918_223743 struct {
	migration.Migration
}

// DO NOT MODIFY
func init() {
	m := &BlogEntry_20220918_223743{}
	m.Created = "20220918_223743"

	migration.Register("BlogEntry_20220918_223743", m)
}

// Run the migrations
func (m *BlogEntry_20220918_223743) Up() {
	// use m.SQL("CREATE TABLE ...") to make schema update
	m.SQL("CREATE TABLE blog-entry(`id` int(11) NOT NULL AUTO_INCREMENT,`slug` varchar(128) NOT NULL,`created_on` varchar(128) NOT NULL,`created_by` varchar(128) NOT NULL,`modified_on` varchar(128) NOT NULL,`modified_by` varchar(128) NOT NULL,`title` varchar(128) NOT NULL,`body` longtext  NOT NULL,`tags` varchar(128) NOT NULL,`status` varchar(128) NOT NULL,PRIMARY KEY (`id`))")
}

// Reverse the migrations
func (m *BlogEntry_20220918_223743) Down() {
	// use m.SQL("DROP TABLE ...") to reverse schema update
	m.SQL("DROP TABLE `blog-entry`")
}

package main

import (
	"github.com/zenazn/goji"
	"regexp"
)

func main() {
	goji.Get("/entries", entries)
	goji.Get(regexp.MustCompile(`^/entries/(?P<id>\d+)$`), entry)
	goji.Post("/entries", createEntries)

	// Exception
	goji.NotFound(notFound)

	// Serve
	goji.Serve()
}

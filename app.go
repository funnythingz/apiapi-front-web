package main

import (
	"github.com/zenazn/goji"
	"regexp"
)

func main() {
	goji.Get("/entries", entries)
	goji.Post("/entries", createEntries)
	goji.Get(regexp.MustCompile(`^/entries/(?P<id>\d+)$`), entry)

	// Exception
	goji.NotFound(notFound)

	// Serve
	goji.Serve()
}

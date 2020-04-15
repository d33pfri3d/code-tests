# Report is responsible for printing/formatting the results present in the
# frozen_string_literal: true

module Logger
  class Report
    def initialize(cache)
      @cache = cache
    end

    def output
      puts "== Page views =="
      page_views
      puts ""
      puts "== Unique page views =="
      unique_views
    end

    private

    def page_views
      @cache.page_views.each do |page, views|
        puts "#{page} #{views} visits"
      end
    end

    def unique_views
      @cache.unique_views.each do |page, views|
        puts "#{page} #{views} unique views"
      end
    end
  end
end

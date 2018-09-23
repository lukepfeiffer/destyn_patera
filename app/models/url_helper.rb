class UrlHelper
  def self.update_vimeo(vimeo_url)
    url_first_half = vimeo_url.split('//').second.split('/').first.prepend('//player.')
    url_second_half = vimeo_url.split('//').second.split('/').second.prepend('/video/')
    url_first_half + url_second_half
  end
end

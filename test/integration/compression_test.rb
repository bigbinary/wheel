require 'test_helper'

class CompressionTest < ActionDispatch::IntegrationTest
  def test_a_visitor_browser_that_supports_compression
    ['deflate','gzip', 'deflate,gzip','gzip,deflate'].each do|compression_method|
      get root_path, {}, {'HTTP_ACCEPT_ENCODING' => compression_method }
      assert response.headers['Content-Encoding']
    end
  end

  def test_a_visitor_browser_does_not_support_compression
    get root_path
    assert_not response.headers['Content-Encoding']
  end
end

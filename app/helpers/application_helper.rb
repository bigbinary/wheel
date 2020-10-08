# frozen_string_literal: true

module ApplicationHelper
  def get_client_props
    {
      user: current_user,
      is_admin: current_user && current_user.super_admin?
    }
  end

  def super_admin_signed_in?
    user_signed_in? && current_user.super_admin?
  end

  def nav_link(text, path, condition = false, options = {})
    class_name = (current_page?(path) || condition) ? "active" : ""

    content_tag(:li, class: class_name) do
      options[:title] = text unless options.has_key?(:title)
      link_to text, path, options
    end
  end
end

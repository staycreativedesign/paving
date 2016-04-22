require 'rubygems'
require 'sinatra'
require 'haml'


get '/' do
haml :layout, :layout =>
  false do
    haml :main
  end
end

post '/' do
require 'pony'
Pony.mail({
  :to => 'info@staycreativedesign.com',
  :subject => params[:name] + " has contacted you via the website",
  :headers => { 'Content-Type' => 'text/html' },
  :body => "<br><br>Email: #{params[:email]}" + "<br><br><br><br>Message: #{params[:message]}",
  :via => :smtp,
  :via_options => {
    :address              => 'smtp.gmail.com',
    :port                 => '587',
    :enable_starttls_auto => true,
    :user_name            => 'emailredirectionserviceonline@gmail.com',
    :password             => 'rz30^4611',
    :domain               => "staycreativedesign.com" # the HELO domain provided by the client to the server
  }
})
  redirect '/'
end

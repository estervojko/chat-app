class MessagesController < ApplicationController
  before_action :set_message, only: [:show, :update, :destroy, :mine]
  before_action :authenticate_user, only: [:create, :upate, :destroy, :mine]

  # GET /messages
  def index
    @messages = Message.all

    render json: @messages
  end

  # GET /messages/1
  def show
    render json: @message
  end

  # POST /messages
  def create
    puts message_params
    puts current_user
    @message = current_user.messages.new(message_params)

    if @message.save
      # ActionCable.server.broadcast 'conversations_channel', @message
      render json: @message, status: :created, location: @message
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /messages/1
  def update
    if @message.update(message_params)
      render json: @message
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  # DELETE /messages/1
  def destroy
    @message.destroy
  end

  # GET /messages/mine
  def mine
    @messages = current_user.messages

    render json: @messages
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_message
      @message = Message.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def message_params
      params.require(:message).permit(:content)
    end
end

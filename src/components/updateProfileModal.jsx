
"use client";

import { authClient } from "@/lib/auth-client";
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { BiUser } from "react-icons/bi";
import { GrUpdate } from "react-icons/gr";

export function UpdateProfileModal() {

const onSubmit = async(e) =>{
    e.preventDefault()
    const name = e.target.name.value
    const image = e.target.image.value
    console.log({name , image});


    await authClient.updateUser({
    image,
    name,
})
}

  return (
    <Modal>
      <Button className=" rounded-md py-1 px-5 bg-orange-500 hover:bg-orange-600">
        <GrUpdate />
        Open Contact Form
        </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-orange-100">
                <BiUser className="size-5 text-orange-500 " />
              </Modal.Icon>
              <Modal.Heading>Update User Profile</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we'll get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">

                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  
                  <TextField className="w-full" name="image" type="text">
                    <Label>Image URL</Label>
                    <Input placeholder="Type Here Image URL" />
                  </TextField>

            <Modal.Footer>
              <Button slot="close" className="flex items-center bg-orange-500 rounded-full hover:bg-orange-600 hover:text-white cursor-pointer">
                Cancel
              </Button>
              <Button type="submit" slot="close" 
              className="flex items-center bg-orange-500 rounded-full hover:bg-orange-600 hover:text-white cursor-pointer"
              >Save</Button>
            </Modal.Footer>

                </form>
              </Surface>
            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

export default UpdateProfileModal;
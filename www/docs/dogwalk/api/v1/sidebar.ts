import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "dogwalk/api/v1/dog-walk-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "dogwalk/api/v1/list-all-registered-dogs",
          label: "List all registered dogs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dogwalk/api/v1/register-a-new-dog",
          label: "Register a new dog",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "dogwalk/api/v1/get-details-of-a-registered-dog",
          label: "Get details of a registered dog",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dogwalk/api/v1/amend-details-of-a-registered-dog",
          label: "Amend details of a registered dog",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "dogwalk/api/v1/deregister-a-dog",
          label: "Deregister a dog",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "dogwalk/api/v1/upload-images-of-a-dog",
          label: "Upload images of a dog",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "dogwalk/api/v1/view-images-of-a-dog",
          label: "View images of a dog",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dogwalk/api/v1/remove-images-of-a-dog",
          label: "Remove images of a dog",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "dogwalk/api/v1/schedule-a-walk-for-a-dog",
          label: "Schedule a walk for a dog",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "dogwalk/api/v1/get-details-of-a-scheduled-walk",
          label: "Get details of a scheduled walk",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dogwalk/api/v1/reschedule-a-walk",
          label: "Reschedule a walk",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "dogwalk/api/v1/unschedule-a-walk",
          label: "Unschedule a walk",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "dogwalk/api/v1/record-a-walk-as-completed",
          label: "Record a walk as completed",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "dogwalk/api/v1/upload-images-of-a-walk",
          label: "Upload images of a walk",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "dogwalk/api/v1/view-images-of-a-walk",
          label: "View images of a walk",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dogwalk/api/v1/remove-images-of-a-walk",
          label: "Remove images of a walk",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "dogwalk/api/v1/list-all-scheduled-dog-walks",
          label: "List all scheduled dog walks",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

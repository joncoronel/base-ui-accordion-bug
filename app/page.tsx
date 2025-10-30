import * as React from "react";
import { Accordion } from "@base-ui-components/react/accordion";
import ExampleSelect from "./selecttest";

export default function ExampleAccordion() {
  return (
    <div className="p-6">
      <AccordionRoot>
        <AccordionItem>
          <AccordionHeader>
            <AccordionTrigger>
              What is Base UI?
              <PlusIcon className="mr-2 size-3 shrink-0 transition-all ease-out group-data-[panel-open]:scale-110 group-data-[panel-open]:rotate-45" />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>
            <DummyContent />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <AccordionTrigger>
              What is Base UI?
              <PlusIcon className="mr-2 size-3 shrink-0 transition-all ease-out group-data-[panel-open]:scale-110 group-data-[panel-open]:rotate-45" />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>
            <DummyContent />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <AccordionTrigger>
              What is Base UI?
              <PlusIcon className="mr-2 size-3 shrink-0 transition-all ease-out group-data-[panel-open]:scale-110 group-data-[panel-open]:rotate-45" />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>
            <DummyContent />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <AccordionTrigger>
              What is Base UI?
              <PlusIcon className="mr-2 size-3 shrink-0 transition-all ease-out group-data-[panel-open]:scale-110 group-data-[panel-open]:rotate-45" />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>
            <DummyContent />
          </AccordionPanel>
        </AccordionItem>
      </AccordionRoot>
      <div>hello</div>
    </div>
  );
}

function AccordionRoot({ children }: { children: React.ReactNode }) {
  return (
    <Accordion.Root
      multiple={false}
      className={"group flex w-96 max-w-[calc(100vw-8rem)] flex-col"}
    >
      {children}
    </Accordion.Root>
  );
}

function AccordionItem({ children }: { children: React.ReactNode }) {
  return (
    <Accordion.Item className="relative -mt-px overflow-hidden border border-gray-300 bg-white transition-[margin,border-radius] ease-out first:rounded-t-lg last:rounded-b-lg data-[open]:mt-2 data-[open]:mb-2 data-[open]:rounded-lg data-[open]:first:mt-0 data-[open]:last:mb-0 [&:has(+_[data-open])]:rounded-b-lg [[data-open]_+_&]:rounded-t-lg">
      {children}
    </Accordion.Item>
  );
}

function AccordionHeader({ children }: { children: React.ReactNode }) {
  return <Accordion.Header>{children}</Accordion.Header>;
}

function AccordionTrigger({ children }: { children: React.ReactNode }) {
  return (
    <Accordion.Trigger className="group relative flex w-full items-center justify-between gap-4 bg-gray-50 py-2 pr-1 pl-3 text-left font-medium hover:bg-gray-100">
      {children}
    </Accordion.Trigger>
  );
}

function AccordionPanel({ children }: { children: React.ReactNode }) {
  return (
    <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden text-base text-gray-600 transition-[height] ease-out data-[ending-style]:h-0 data-[starting-style]:h-0">
      {children}
    </Accordion.Panel>
  );
}

function DummyContent() {
  return (
    <div className="p-3">
      <div className="flex items-center justify-between">
        <span>Payment method</span>
        <ExampleSelect />
      </div>
      <div className="flex items-center justify-between">
        <span>Payment method</span>
        <ExampleSelect />
      </div>
    </div>
  );
}

function PlusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 12 12" fill="currentcolor" {...props}>
      <path d="M6.75 0H5.25V5.25H0V6.75L5.25 6.75V12H6.75V6.75L12 6.75V5.25H6.75V0Z" />
    </svg>
  );
}
